import { Schema, model } from 'mongoose';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Informe o nome da pessoa usuária.'],
    trim: true,
    minlength: [2, 'O nome deve ter pelo menos 2 caracteres.'],
  },
  email: {
    type: String,
    required: [true, 'Informe o e-mail da pessoa usuária.'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [emailPattern, 'Informe um e-mail válido.'],
  },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  fitnessGoal: {
    type: String,
    required: [true, 'Informe a meta de condicionamento.'],
    enum: { values: ['endurance', 'strength', 'mobility'], message: 'Meta de condicionamento inválida.' },
  },
});

export const User = model('User', userSchema);
