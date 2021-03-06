import { browser, Tabs } from "webextension-polyfill-ts";
import { getLocalStorage, setTabInfo } from "./storage";
import { State } from "../state";

export const getActiveTab = async (): Promise<Tabs.Tab> => {
  const tabs = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  return tabs[0];
};

export const downloadTo = ({ url }) => {
  browser.downloads.download({
    url,
    filename: "api-spec.json",
  });
};

export const openSwaggerEditor = async () => {
  const width = window.screen.availWidth;
  // Remember which tab opened the Swagger editor
  const activeTab = await getActiveTab();
  const activeTabId = activeTab.id;
  console.log(`Setting active tab ID: ${activeTabId}`);
  await setTabInfo({ tabId: activeTabId });
  return await browser.windows.create({
    url: browser.runtime.getURL("swagger.html"),
    type: "popup",
    left: 0,
    top: 0,
    width: Math.floor(width / 3),
  });
};

type StateChangeHandler = (state: State) => void;

export const buildStateChangeHandler = (
  stateChangeHandler: (state: State) => void
) => {
  return async (changes, namespace) => {
    const state = await getLocalStorage();
    stateChangeHandler(state);
  };
};

export const subscribeToChanges = (stateChangeHandler: StateChangeHandler) => {
  const listener = buildStateChangeHandler(stateChangeHandler);
  browser.storage.onChanged.addListener(listener);
  return listener;
};

export const unsubscribeToChanges = (listener: any) => {
  browser.storage.onChanged.removeListener(listener);
};
