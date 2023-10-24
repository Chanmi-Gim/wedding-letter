import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class BoardStatusValidaitonPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`value : ${value}, metadate : ${metadata}`);
  }
}
