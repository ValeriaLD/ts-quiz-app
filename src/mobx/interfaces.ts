import {Instance, SnapshotIn, SnapshotOut,} from "mobx-state-tree";
import {RootStore} from "./store/RootStore.store"
import  {contentStore} from "./models/Quiz.model"

export interface IRootStore extends Instance<typeof RootStore> {

}

export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {

}

export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {

}

export interface IQuizModelSnapshot extends Instance<typeof contentStore> {
}

export interface IQuizModelSnapshotIn extends SnapshotIn<typeof contentStore> {
}

export interface IQuizModelSnapshotOut extends SnapshotOut<typeof contentStore> {
}

