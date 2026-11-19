import { Schema, model } from 'mongoose';

const teamSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Informe o nome da equipe.'],
    unique: true,
    trim: true,
    minlength: [2, 'O nome da equipe deve ter pelo menos 2 caracteres.'],
  },
  mascot: {
    type: String,
    required: [true, 'Informe o mascote da equipe.'],
    trim: true,
    minlength: [2, 'O mascote deve ter pelo menos 2 caracteres.'],
  },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export const Team = model('Team', teamSchema);
