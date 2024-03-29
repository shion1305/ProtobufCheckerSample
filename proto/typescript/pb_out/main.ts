/* eslint-disable */

export const protobufPackage = "";

export interface UserData {
  userId: string;
  username: string;
  firstname: string;
  lastname: string;
  firstnameKana: string;
  lastnameKana: string;
  statusMessage: string;
  tag: Tag[];
  /** GCS内のファイル名 */
  iconImageHash: string;
}

export interface Tag {
  tagId: string;
  tagName: string;
}

export interface EventData {
  userId: string;
  eventId: string;
  title: string;
  content: string;
  /** GCS内のファイル名 */
  imageHash: string;
  /** RFC3339 */
  beginDate: string;
  /** RFC3339 */
  finishDate: string;
}

export const _PACKAGE_NAME = "";
