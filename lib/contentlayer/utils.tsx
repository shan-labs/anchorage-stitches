import type { ComputedFields, FieldDefs } from "contentlayer/source-files";
import { chopOffWord } from "../utils/string";

const getSlug = (prefix: string) => {
  const cleanPath = chopOffWord(prefix, false);
  return (doc: { slug?: string; _raw: { flattenedPath: string } }) =>
    doc.slug ?? cleanPath(doc._raw.flattenedPath);
};

export const fields: FieldDefs = {
  title: {
    type: `string`,
    required: true,
  },
  subtitle: {
    type: `string`,
  },
  slug: {
    type: `string`,
  },

  tended: {
    type: `date`,
    required: true,
  },

  status: {
    type: `enum`,
    options: [`draft`, `published`],
  },

  categories: {
    type: `list`,
    of: {
      type: `string`,
    },
  },
};

interface IComputedFieldsProps {
  prefix: string;
  subtitle: string;
  status?: string;
}
export const getComputedFields = <T extends string>({
  prefix,
  subtitle,
  status = `published`,
}: IComputedFieldsProps): ComputedFields<T> => {
  const slugify = getSlug(prefix);

  return {
    slug: {
      type: `string`,
      resolve: slugify,
    },
    subtitle: {
      type: `string`,
      resolve: (doc) => doc.subtitle ?? subtitle,
    },
    status: {
      type: `enum`,
      // @ts-ignore confident enum should have accompanying options array
      options: [`draft`, `published`],
      resolve: (doc) => doc.status ?? status,
    },
  };
};
