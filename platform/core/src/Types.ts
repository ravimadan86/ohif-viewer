export type Object = Record<string, unknown>;
export type Consumer = (props: Object) => void;
// This is just Object right now, but eventually the idea is to
// create a full interface object here.
export type ICommandsManager = Object;

export type IGuiCustomization = Object;

export interface IPubSub {
  subscribe: (eventName: string, callback: Consumer) => void;
  _broadcastEvent: (eventName: string, callbackProps: Object) => void;
  _unsubscribe: (eventName: string, listenerId: string);
  _isValidEvent: (eventName: string) => boolean;
};
