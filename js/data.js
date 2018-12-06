import tracks from './audio-tracks.js';

export const initialState = Object.freeze({
  level: 0,
  levels: 9,
  lives: 3,
  time: 300000,
  answers: []
});

export const levels = [
  {
    type: `game--genre`,
    title: `Выберите ${tracks[0].genre} треки`,
    task: tracks[0],
    answers: [tracks[3], tracks[1], tracks[2], tracks[0]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    task: tracks[0],
    answers: [tracks[1], tracks[0], tracks[2]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    task: tracks[1],
    answers: [tracks[3], tracks[1], tracks[5]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${tracks[1].genre} треки`,
    task: tracks[1],
    answers: [tracks[2], tracks[0], tracks[4], tracks[1]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    task: tracks[2],
    answers: [tracks[1], tracks[2], tracks[0]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${tracks[2].genre} треки`,
    task: tracks[2],
    answers: [tracks[0], tracks[4], tracks[5], tracks[2]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    task: tracks[3],
    answers: [tracks[5], tracks[3], tracks[4]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${tracks[3].genre} треки`,
    task: tracks[3],
    answers: [tracks[0], tracks[1], tracks[2], tracks[3]],
  },
  {
    type: `game--artist`,
    title: `Кто исполняет эту песню?`,
    task: tracks[4],
    answers: [tracks[0], tracks[4], tracks[2]],
  },
  {
    type: `game--genre`,
    title: `Выберите ${tracks[4].genre} треки`,
    task: tracks[4],
    answers: [tracks[1], tracks[2], tracks[5], tracks[4]],
  }
];
