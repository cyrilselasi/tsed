import {Schema} from "@tsed/schema";
import {JSONSchema6} from "json-schema";

/**
 * Use raw JsonSchema to validate parameter.
 * @param schema
 * @deprecated Since v6. Use @Schema from @tsed/schema
 */
export function UseSchema(schema: JSONSchema6) {
  return Schema(schema);
}
