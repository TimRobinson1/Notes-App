var notePad = new NotePad();

document.getElementById("create").addEventListener("click", function() {
  notePad.addNote(document.getElementById("note").value);

  var note_counter = 0
  document.getElementById("notes").innerHTML = "";

  notePad.notes.forEach(function(note) {
      note = notePad.shortenString(note);
      var list = document.getElementById("notes")
      list.innerHTML = `<a  href='#${note_counter}'><p id='entry${note_counter}'>${note}</p></a>` + list.innerHTML;
      note_counter++
    })
  })

  window.addEventListener("hashchange", function() {
    var indexNumber = window.location.hash.split("#")[1];
    document.getElementById("note-display")
    .innerHTML = notePad.notes[indexNumber]
  });
