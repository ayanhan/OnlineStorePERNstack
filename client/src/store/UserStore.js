import {makeAutoObservable} from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  SetIsAuth(bool) {
    this._isAuth = bool
  }
}