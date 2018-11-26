import {
  Rule,
  apply,
  url,
  mergeWith,
  template,
  move,
  SchematicsException
} from "@angular-devkit/schematics";
import { schemaOptions } from "./schema";
import { strings } from "@angular-devkit/core";
import { existsSync } from "fs";

export function simpleAlainCli(options: schemaOptions): Rule {
  const path = options.name;
  return () => {
    if (existsSync(`./${path}/`)) {
      throw new SchematicsException("目录已经存在咯,换个名字吧");
    }

    return mergeWith(
      apply(url("./files"), [
        template({
          utils: strings,
          ...options,
          dot: "."
        }),
        move(`./${path}`)
      ])
    );
  };
}
