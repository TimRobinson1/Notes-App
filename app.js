const addReminder = new Note();

function Note(){
  this.shortNote;
  this.newNote;
}

Note.prototype.reduceNote = function () {
  this.shortNote = this.newNote.substr(0, 20);
};

Note.prototype.addNoteLink = function(shortNote) {
  document
  .getElementById("notes")
  .innerHTML += '<a href="note' + noteCounter +'"'+ ' id="shortNote' + '">' + note + '</a>';
}
