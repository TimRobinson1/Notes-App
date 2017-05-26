function NotePad() {
  this.notes = [];
}

NotePad.prototype.addNote = function(note) {
  this.notes.push(note);
}

NotePad.prototype.shortenString = function(string) {
  return string.substr(0, 20);
}

NotePad.prototype.deleteNote = function (string) {
  this.notes = this.notes.slice(this.notes.indexOf(string))
  document.getElementById("notes").innerHTML = "";
  document.getElementById("note-display").innerHTML = "";
};

NotePad.prototype.newIndex = function (string) {
  return this.notes.indexOf(string)
};
