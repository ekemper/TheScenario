import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuid_v4 } from 'uuid';

@Schema({
  collection: 'Data',
  autoCreate: true,
  timestamps: {
    createdAt: 'created',
  }
})
export class Datum {
  @Prop({ type: String, default: uuid_v4 })
  _id?: string;
  
  @Prop({type: String})
  text: string;
}

export const DatumSchema = SchemaFactory.createForClass(Datum);

export const DataCollection = {
  name: Datum.name,
  schema: DatumSchema,
};

export const DataConnection = MongooseModule.forFeature(
    [DataCollection],
    "local"
);