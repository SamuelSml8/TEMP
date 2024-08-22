import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({
    required: true,
    validate: {
      validator: function (v: Date) {
        return v <= new Date();
      },
      message: (props) =>
        `La fecha de nacimiento (${props.value}) no puede ser en el futuro.`,
    },
  })
  birthDate: Date;

  @Prop({
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Date, default: null })
  deletedAt: Date | null;

  @Prop({ type: String, default: null })
  deletedBy: string | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
