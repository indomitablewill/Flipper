/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {Logger} from '../utils/Logger';
import {Device} from './DevicePlugin';
import {NormalizedMenuEntry} from './MenuEntry';
import {RealFlipperClient} from './Plugin';
import {Notification} from './Notification';
import {DetailSidebarProps} from '../ui/DetailSidebar';

export type FileEncoding = 'utf-8' | 'base64';

export interface FileDescriptor {
  data: string;
  name: string;
  path?: string;
}

/**
 * This interface exposes all global methods for which an implementation will be provided by Flipper itself
 */
export interface FlipperLib {
  isFB: boolean;
  logger: Logger;
  enableMenuEntries(menuEntries: NormalizedMenuEntry[]): void;
  createPaste(input: string): Promise<string | undefined>;
  GK(gatekeeper: string): boolean;
  selectPlugin(
    device: Device,
    client: RealFlipperClient | null,
    pluginId: string,
    deeplink: unknown,
  ): void;
  writeTextToClipboard(text: string): void;
  openLink(url: string): void;
  showNotification(pluginKey: string, notification: Notification): void;
  DetailsSidebarImplementation?(
    props: DetailSidebarProps,
  ): React.ReactElement | null;
  /**
   * @returns
   * Imported file data.
   * If user cancelled a file selection - undefined.
   */
  importFile(options?: {
    /**
     * Default directory to start the file selection from
     */
    defaultPath?: string;
    /**
     * List of allowed file extensions
     */
    extensions?: string[];
    /**
     * Open file dialog title
     */
    title?: string;
    /**
     * File encoding
     */
    encoding?: FileEncoding;
    /**
     * Allow selection of multiple files
     */
    multi?: false;
  }): Promise<FileDescriptor | undefined>;
  importFile(options?: {
    defaultPath?: string;
    extensions?: string[];
    title?: string;
    encoding?: FileEncoding;
    multi: true;
  }): Promise<FileDescriptor[] | undefined>;

  /**
   * @returns
   * An exported file path (if available) or a file name.
   * If user cancelled a file selection - undefined.
   */
  exportFile(
    /**
     * New file data
     */
    data: string,
    options?: {
      /**
       * A file path suggestion for a new file.
       * A dialog to save file will use it as a starting point.
       * Either a complete path to the newly created file, a path to a directory containing the file, or the file name.
       */
      defaultPath?: string;
      /**
       * File encoding
       */
      encoding?: FileEncoding;
    },
  ): Promise<string | undefined>;
  paths: {
    homePath: string;
    appPath: string;
  };
}

export let flipperLibInstance: FlipperLib | undefined;

export function tryGetFlipperLibImplementation(): FlipperLib | undefined {
  return flipperLibInstance;
}

export function getFlipperLib(): FlipperLib {
  if (!flipperLibInstance) {
    throw new Error('Flipper lib not instantiated');
  }
  return flipperLibInstance;
}

export function setFlipperLibImplementation(impl: FlipperLib | undefined) {
  flipperLibInstance = impl;
}