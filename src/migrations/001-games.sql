-- Up
CREATE TABLE Game (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  rules TEXT
);

CREATE TABLE Meeting (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  gameId INTEGER REFERENCES Game(id)
);

CREATE TABLE User (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  meetingId INTEGER REFERENCES Meeting(id)
);

INSERT INTO Game (name, rules) values ('Bingo',  'When the game starts, random numbers are drawn and whoever of the players participating in the game completes a bingo pattern first, wins the prize (a line with five numbers in diagonal, horizontal or vertical row). The numbers on the cards are randomly assigned to the squares on the card.');
INSERT INTO Game (name, rules) values ('Checkers',  'Moves are allowed only on the dark squares, so pieces always move diagonally. Single pieces are always limited to forward moves (toward the opponent)');

INSERT INTO Meeting (gameId) values (1);
INSERT INTO Meeting (gameId) values (1);
INSERT INTO Meeting (gameId) values (2);

INSERT INTO USER (meetingId) values (1);
INSERT INTO USER (meetingId) values (1);
INSERT INTO USER (meetingId) values (1);

-- Down
DROP TABLE Game;
DROP TABLE Meeting;
DROP TABLE User;