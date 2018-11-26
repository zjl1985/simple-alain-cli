import {
  Rule,
  apply,
  url,
  mergeWith,
  template,
  move
} from "@angular-devkit/schematics";
import { schemaOptions } from "./schema";
import { strings } from "@angular-devkit/core";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function simpleAlainCli(options: schemaOptions): Rule {
  const path = options.name;
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
}
