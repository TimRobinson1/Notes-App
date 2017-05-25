var notePad = new NotePad();
var note_counter = 0;

document.getElementById("create").addEventListener("click", function() {
  notePad.addNote(document.getElementById("note").value);
  var note = notePad.shortenString(notePad.notes[note_counter]),
      list = document.getElementById("notes");
  list.innerHTML = `<a href='#${note_counter}'><p id='entry${note_counter}'>${note}</p></a>` + list.innerHTML;
  note_counter++;
});

window.addEventListener("hashchange", function() {
  var index = window.location.hash.split("#")[1];
  document.getElementById("note-display").innerHTML = notePad.notes[index];
});
