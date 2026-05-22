import type { ComponentType } from "react";
import { SeoMetaGenerator } from "./utilities/seo-meta-generator";
import { JsonFormatter } from "./utilities/json-formatter";
import { ImageResizer } from "./utilities/image-resizer";
import { LoremIpsum } from "./utilities/lorem-ipsum";
import { PasswordGenerator } from "./utilities/password-generator";
import { UrlEncoder } from "./utilities/url-encoder";
import { Base64Encoder } from "./utilities/base64-encoder";
import { MarkdownPreviewer } from "./utilities/markdown-previewer";
import { WordCounter } from "./utilities/word-counter";
import { HtmlEntity } from "./utilities/html-entity";
import { CaseConverter } from "./utilities/case-converter";
import { BoxShadowGenerator } from "./utilities/box-shadow-generator";
import { RegexTester } from "./utilities/regex-tester";
import { ObjectToJson } from "./utilities/object-to-json";
import { TimestampConverter } from "./utilities/timestamp-converter";
import { UuidGenerator } from "./utilities/uuid-generator";
import { HashGenerator } from "./utilities/hash-generator";
import { ColorConverter } from "./utilities/color-converter";
import { CssGradientGenerator } from "./utilities/css-gradient-generator";
import { JwtDecoder } from "./utilities/jwt-decoder";
import { CssMinifier } from "./utilities/css-minifier";
import { UtmBuilder } from "./utilities/utm-builder";
import { RobotsTxtGenerator } from "./utilities/robots-txt-generator";
import { SitemapGenerator } from "./utilities/sitemap-generator";
import { CronHelper } from "./utilities/cron-helper";

export const TOOL_COMPONENTS: Record<string, ComponentType> = {
  "seo-meta-generator": SeoMetaGenerator,
  "json-formatter": JsonFormatter,
  "image-resizer": ImageResizer,
  "lorem-ipsum": LoremIpsum,
  "password-generator": PasswordGenerator,
  "url-encoder": UrlEncoder,
  "base64-encoder": Base64Encoder,
  "markdown-previewer": MarkdownPreviewer,
  "word-counter": WordCounter,
  "html-entity": HtmlEntity,
  "case-converter": CaseConverter,
  "box-shadow-generator": BoxShadowGenerator,
  "regex-tester": RegexTester,
  "object-to-json": ObjectToJson,
  "timestamp-converter": TimestampConverter,
  "uuid-generator": UuidGenerator,
  "hash-generator": HashGenerator,
  "color-converter": ColorConverter,
  "css-gradient-generator": CssGradientGenerator,
  "jwt-decoder": JwtDecoder,
  "css-minifier": CssMinifier,
  "utm-builder": UtmBuilder,
  "robots-txt-generator": RobotsTxtGenerator,
  "sitemap-generator": SitemapGenerator,
  "cron-helper": CronHelper,
};
