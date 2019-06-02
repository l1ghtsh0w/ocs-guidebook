const staff = [
  "SHIP'S OFFICER (SHIPO)",
  [
    ["CDR Natalya Petrova", "secondlife:///app/agent/613997e7-f260-47ee-b63e-9110dbc0d130/about"]
  ],
  "RECRUIT DIVISION COMMANDERS", 
  [
    ["MACM Chester McFisticuffs", "secondlife:///app/agent/45883043-2dfa-4241-b8b1-64fb4318cb3c/about"],
    ["MAC Curgus", "secondlife:///app/agent/8010c57b-3d1f-4f8b-a616-5cc4cfd03de6/about"],
    ["MAC Jax Texas", "secondlife:///app/agent/6fd4d99a-0c3d-43a3-ae64-74026bb0d1f8/about"]
  ],
  "PHYSICAL TRAINING AND SWIM COACH",
  [
    //["CAPT Alli Eberdene", "secondlife:///app/agent/9ea0b3c7-6ea3-4438-848b-f5653c779720/about"],
    ["LTJG Antonio Tophat", "secondlife:///app/agent/d25cd2ce-3703-4ae2-89c2-9492a63b49b4/about"]
  ],
  "MARKSMANSHIP RANGE MASTER",
  [
    ["GMC Fiona Goode", "secondlife:///app/agent/31d1e7b3-0de6-470f-a4c7-49349e74afef/about"]
  ],
  "MEDICAL OFFICER/STAFF",
  [
    ["CPT Chayton Coursey (US Army)", "secondlife:///app/agent/4919b983-1974-48fb-8b7a-cdb614c9998d/about"],
    ["HM3 Sawyer Fallenwynter", "secondlife:///app/agent/f25b4a7e-dbbf-48f7-8ad7-7abda31e6bc9/about"]
  ],
  "INSTRUCTORS",
  [
    ["CAPT Alli Eberdene", "secondlife:///app/agent/9ea0b3c7-6ea3-4438-848b-f5653c779720/about"],
    ["CAPT Connie Mistwalker", "secondlife:///app/agent/842e03a9-3f43-4bb8-a96f-b7ef622673c2/about"],
    ["CDR Bambi Baxter", "secondlife:///app/agent/f30b1bcc-6e0e-4d5f-a28c-9d4ef0dd8a94/about"],
    ["HMCS Jesse Hall", "secondlife:///app/agent/573d5a7d-a0e1-4acb-8dbf-a8e49f202ef1/about"],
    ["NC2 Emily Strudel", "secondlife:///app/agent/1b0f7acd-272c-4e36-9aa6-dcfee0dc056c/about"]
  ]
]

const terms = [
  ["USNSL", "US Navy in SL", "the United States Navy in Second Life (no affiliation with Real Life Navy)."],
  ["IC", "In-Character", "when acting as your character in a role play."],
  ["OOC", "Out-Of-Character", "when NOT acting as your character in a role play."],
  ["NSO", "Naval Station Oryx", "a USNSL base on the continent of Corsica."],
  ["NSTC", "Naval Service Training Command", "where training for the USNSL occurs."],
  ["RTC", "Recruit Training Command", "the name of the training program for those applying to enlisted service."],
  ["OCS", "Officer Candidate School", "the name of the school/training program for those applying as an officer, or enlisted members seeking to become one."],
  ["Sailorization", "The main goal of RTC, and one goal of OCS", "the process of being transformed from a civilian to a basically trained sailor."],
  ["Instructor", "'RDCs' of OCS", "teachers and those in charge of OCS."],
  ["RDC", "Recruit Division Commander", "teachers and those in charge of RTC."],
  ["DEP", "Delayed Entry Program", "a program to introduce new applicants to the basics, in preparation for RTC."],
  ["PQS", "Personal Qualification Standard", "a collection of training objectives."]
]


function writeTerms()
{
  var termLen = terms.length;
  var i;
  var newHtml = "<dl>";
  
  for (i=0; i<termLen; i++)
  {
    newHtml += "<p><dt>" + terms[i][0] + "</dt><dd>" + terms[i][1] + ";<br/>" + terms[i][2] + "</dd></p>";
  }

  newHtml += "</dl>";
  document.getElementById("terms").innerHTML = newHtml;
}

function writeStaff()
{
  var staffLen = staff.length;
  var i, j;
  var newHtml = "";

  for (i=0; i<staffLen; i+=2)
  {
    var memLen = staff[i+1].length;
    newHtml = newHtml + "<p class='staff'>" + staff[i] + "<br />";

    for (j=0; j<memLen; j++)
    {
      newHtml += "<span class='name'><a href='" + staff[i+1][j][1] + "'>" + staff[i+1][j][0] + "</a></span><br />";
    }

    newHtml += "</p>";
  }

  document.getElementById("staff").innerHTML = newHtml;
}

function changeContent(file)
{
  fileNew = "pages/" + file + ".html";
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", fileNew, false);
  
  rawFile.onreadystatechange = function ()
  {
    if (rawFile.readyState === 4)
    {
      if (rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        document.getElementById("content").innerHTML = allText;
      }
    }
  }

  rawFile.send(null);

  if (file == "staff")
  {
    writeStaff();
  }
  if (file == "terms")
  {
    writeTerms();
  }
}