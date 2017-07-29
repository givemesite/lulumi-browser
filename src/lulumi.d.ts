// *.vue
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'lulumi' {
  export namespace scheme {
    // lulumi:// scheme
    export interface LulumiObject extends Object {
      lulumi: object[];
      preferences: string[][];
      about: string[][];
    }
  }

  export namespace api {
    // extension api
    export interface BackgroundPageObject {
      html: Buffer;
      name: string;
      webContentsId: number;
    }
    export interface BackgroundPages {
      [index: string]: BackgroundPageObject;
    }
    export interface ManifestObject extends chrome.runtime.Manifest {
      extensionId: string;
      manifest_version?: string;
      version?: string;
    }
    export interface ManifestMap {
      [index: string]: ManifestObject
    }
    export interface ManifestNameMap {
      [index: string]: ManifestObject
    }
    export interface GlobalObject extends NodeJS.Global {
      online: boolean;
      wid: number;
      __static: string;
      renderProcessPreferences: any[];
      backgroundPages: BackgroundPages;
      manifestMap: ManifestMap;
      manifestNameMap: ManifestNameMap;
      guestData: LulumiObject;
    }
    export interface CustomBrowserWindow extends Electron.BrowserWindow {
      addExtension(srcDirectory: string): void;
    }
  }

  export namespace store {
    // store
    export interface PageObject {
      pid: number;
      location: string;
      statusText: boolean;
      favicon: string | null;
      title: string | null;
      isLoading: boolean;
      isSearching: boolean;
      canGoBack: boolean;
      canGoForward: boolean;
      canRefresh: boolean;
      error: boolean;
      hasMedia: boolean;
      isAudioMuted: boolean;
      pageActionMapping: object;
    }
    export interface PageObjectList extends Array<PageObject> {
      [index: number]: PageObject;
      length: number;
    }
    export interface TabConfig {
      defaultUrl: string;
      defaultFavicon: string;
      lulumiFavicon: string;
    }
    export interface SearchEngineObject {
      name: string;
      search: string;
      autocomplete: string;
    }
    export interface LastOpenedTabObject {
      title: string;
      url: string;
      favicon: string | null;
    }
    export interface State {
      pid: number;
      pages: PageObjectList;
      tabsOrder: number[];
      currentPageIndex: number;
      searchEngine: SearchEngineObject[];
      currentSearchEngine: SearchEngineObject;
      homepage: string;
      pdfViewer: string;
      tabConfig: TabConfig;
      lang: string;
      downloads: object[];
      history: object[];
      permissions: object;
      mappings: number[];
      lastOpenedTabs: LastOpenedTabObject[];
    }
  }

  export namespace renderer {
    // src/renderer/js
    export interface SuggestionObject {
      title?: string;
      value: string;
      icon: string;
    }
    export interface AboutLocationObject {
      title: string;
      url: string;
    }
  }

  export namespace browserMainView {
    // BrowserMainView.vue
    export interface Alarm {
      handler: any;
      periodInMinutes: number;
    }
    export interface AlarmArray {
      [index: string]: Alarm;
    }
    export interface LastOpenedTabObject {
      title?: string;
      url: string;
      favicon: string | null;
    }
  }

  export namespace page {
    // Page.vue
    export interface FindInPageObject {
      container?: HTMLElement;
      input: HTMLElement;
      counter: HTMLElement;
      previous: HTMLElement;
      next: HTMLElement;
      endButton: HTMLElement;
      activeWebview: Electron.WebviewTag;
      start(): void;
      end(): void;
    }
  }
}