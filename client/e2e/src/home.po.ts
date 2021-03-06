import { browser, element, by } from 'protractor';

export class HomePage {

  navigateTo() {
    return browser.get('/');
  }

  getUrl() {
    return browser.getCurrentUrl();
  }

  clickAddNewNote() {
    return element(by.className('add-note-fab')).click();
  }

  addNewNote(body: string) {
    element(by.className('add-note-fab')).click();
  }


  async getNumberOfNotes(): Promise<number> {
    return await element.all(by.className('note-card')).count();
  }

  async deleteAllNotes() {
    while (await this.getNumberOfNotes() !== 0) {
      this.deleteFirstNote();
    }
  }

  deleteFirstNote() {
    element.all(by.buttonText('delete')).get(0).click();
  }

  editFirstNote() {
    // The button's text says 'create' because that's the name of
    // the material pencil icon. It's not actually a button for
    // creating things.
    element.all(by.buttonText('create')).get(0).click();
  }
}
