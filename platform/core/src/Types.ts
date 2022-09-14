import {
  StudyMetadata,
  SeriesMetadata,
  InstanceMetadata,
} from './services/DicomMetadataStore/StudyMetadata';

export type Params = Record<string, unknown>;
export type Consumer = (props: Params) => void;
// This is just Object right now, but eventually the idea is to
// create a full interface object here.
export type ICommandsManager = Params;

export type IGuiCustomization = Params;

export interface IPubSub {
  subscribe: (eventName: string, callback: Consumer) => void;
  _broadcastEvent: (
    eventName: string,
    callbackProps: Record<string, unknown>
  ) => void;
  _unsubscribe: (eventName: string, listenerId: string) => void;
  _isValidEvent: (eventName: string) => boolean;
}

export { StudyMetadata, SeriesMetadata, InstanceMetadata };
