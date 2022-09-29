import React from "react";

export const juniorSubjects = (handleEdit) => {
const cols = ["S/N","Core","Electives"];
const data=[
    [1,"English","History"],
    [2,"Mathematics","GeoHistory"],
    [3,"Physics","Social Studies"],
    [4,"Chemistry","Civic Education"],
    [6,"Biology","Home Economics"],
    [7,"Technology","Music"],
    [8,"ICT","Physical & Health Education"],
    [9,"Igbo","Creative Arts"],
    [10,"Drama","Christian Religious Studies"],
    [11,"Basic Technology","Agricultural Science"],

]

return { data, cols, bordered:true, hoverable:true, striped:true, isDark:false };

};
export const scienceSubjects = () => {
const cols = ["", "Cambridge Science Subjects", "WASSCE Science Subjects"];
const data = [
  ["", "CORE", "CORE"],
  ["", "", ""],
  [1, "Physics", "Physics"],
  [2, "Chemistry", "Chemistry"],
  [3, "Biology", "Biology"],
  [4, "Math", "Math"],
  [5, "English", "English"],
  [6, "Economics", "Further Math"],
  [7, "Further Math", "Economics"],
  [8, "Technical Drawing", "Igbo"],
  ["", "", ""],
  ["", "ELECTIVES", "ELECTIVES"],
  ["", "", ""],
  [1, "Business studies/Accounts", "Geography"],
  [2, "Sociology/Geography", "Accounts"],
  [3, "CRS/Literature", "CRS"],
  [4, "French", "French"],
];

return { data, cols, bordered:true, hoverable:true, striped:true, isDark:false };

};
export const socialScienceSubjects = () => {
const cols = ["", "Cambridge Social Science Subjects", "WASSCE Social Science Subjects"];
const data = [
  ["", "CORE", "CORE"],
  ["", "", ""],
  [1, "English", "English"],
  [2, "Math", "Math"],
  [3, "Economics", "Economics"],
  [4, "World Affairs/Literature", "Biology"],
  [5, "Geography", "Geography"],
  [6, "Biology", "CRS"],
  [7, "", "Igbo"],
  [8, "", "History/Literature"],
  ["", "", ""],
  ["", "ELECTIVES", "ELECTIVES"],
  ["", "", ""],
  [1, "Business studies", "Accounts"],
  [2, "Sociology", "Chemistry"],
  [3, "Accounts", "Government"],
  [4, "Chemistry", "French"],
  [5, "French", "Fine Art"],
  [6, "Further Math", "Further Math"],
];

return { data, cols, bordered:true, hoverable:true, striped:true, isDark:false };

};
export const artsSubjects = () => {
const cols = ["", "Cambridge Arts Subjects", "WASSCE Arts Subjects"];
const data = [
  ["", "CORE", "CORE"],
  ["", "", ""],
  [1, "English", "English"],
  [2, "Math", "Math"],
  [3, "Economics", "Literature"],
  [4, "World Affairs", "History"],
  [5, "Literature", "Government"],
  [6, "Biology", "Biology"],
  [7, "CRS", "CRS"],
  [8, "", "Economics"],
  [9, "", "Igbo"],
  ["", "", ""],
  ["", "ELECTIVES", "ELECTIVES"],
  ["", "", ""],
  [1, "Sociology", "Geography"],
  [2, "Business studies", "French"],
  [3, "Geography", "Business Studies"],
  [4, "French", ""],
  
];

return { data, cols, bordered:true, hoverable:true, striped:true, isDark:false };

};
