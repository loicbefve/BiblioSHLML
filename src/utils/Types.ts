// FIXME: We use directly types from the generated api client. It could be better
// to create our own types for less coupling. However the api should not change
// in a while.

export enum PageState {
  NoData = 'nodata',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
