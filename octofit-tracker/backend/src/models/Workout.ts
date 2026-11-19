import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: { type: String, trim: true },
  focus: {
    type: String,
    required: [true, 'Informe o foco do treino.'],
    enum: { values: ['endurance', 'strength', 'mobility'], message: 'Foco de treino inválido.' },
  },
  minutes: {
    type: Number,
    required: [true, 'Informe a duração do treino em minutos.'],
    min: [1, 'A duração deve ser de pelo menos 1 minuto.'],
  },
  difficulty: {
    type: String,
    required: [true, 'Informe a dificuldade do treino.'],
    enum: { values: ['easy', 'moderate', 'hard'], message: 'Dificuldade de treino inválida.' },
  },
});

export const Workout = model('Workout', workoutSchema);
