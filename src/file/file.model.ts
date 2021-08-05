import { getModelForClass, prop } from '@typegoose/typegoose';

class File {
  @prop()
  public name?: string;
  @prop()
  public size?: number;
  @prop()
  public mimeType?: string;
  @prop()
  public path?: string;
}
export const FileModel = getModelForClass(File);
