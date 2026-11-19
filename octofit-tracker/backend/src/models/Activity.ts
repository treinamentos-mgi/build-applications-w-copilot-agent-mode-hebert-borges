import { Schema, model } from 'mongoose';

// Os pontos são calculados pelo serviço antes de salvar.
const activitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: [true, 'Informe a pessoa da atividade.'] },
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: [true, 'Informe a equipe da atividade.'] },
  type: {
    type: String,
    required: [true, 'Informe o tipo da atividade.'],
    enum: { values: ['run', 'cycle', 'walk', 'strength'], message: 'Tipo de atividade inválido.' },
  },
  minutes: {
    type: Number,
    required: [true, 'Informe a duração em minutos.'],
    min: [1, 'A duração deve ser de pelo menos 1 minuto.'],
  },
  points: {
    type: Number,
    required: [true, 'Informe os pontos da atividade.'],
    min: [0, 'Os pontos não podem ser negativos.'],
  },
  occurredAt: { type: Date, required: [true, 'Informe a data da atividade.'] },
});

export const Activity = model('Activity', activitySchema);
