import { LocalStorage, NoteStorageKey, NoteData } from "../types/index";

const getStorage = (): LocalStorage | undefined => {
  if (typeof window !== "undefined") {
    return window.localStorage;
  }
  return undefined;
};

abstract class Storage<T extends string> {
  private readonly storage: LocalStorage | undefined;

  protected constructor(getStorage: () => LocalStorage | undefined) {
    this.storage = getStorage();
  }

  protected get(key: T): string | null {
    if (this.storage) {
      return this.storage.getItem(key);
    }
    return null;
  }

  protected set(key: T, value: string): void {
    if (this.storage) {
      this.storage.setItem(key, value);
    }
  }

  protected clearItem(key: T): void {
    if (this.storage) {
      this.storage.removeItem(key);
    }
  }
}
class NoteStorage extends Storage<NoteStorageKey> {
  constructor() {
    super(getStorage);
  }

  getNoteData(): NoteData | null {
    const data = this.get(NoteStorageKey.NOTE_DATA);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  }

  setNoteData(noteData: NoteData) {
    this.set(NoteStorageKey.NOTE_DATA, JSON.stringify(noteData));
  }

  clear() {
    this.clearItem(NoteStorageKey.NOTE_DATA);
  }

  deleteItem(id: string): void {
    const noteData = this.get(NoteStorageKey.NOTE_DATA);

    if (noteData) {
      const data = JSON.parse(noteData);

      delete data.items[id];
      data.ids = data.ids.filter((value: string) => value !== id);
      this.set(NoteStorageKey.NOTE_DATA, JSON.stringify(data));
    }
  }
}

export default new NoteStorage();
