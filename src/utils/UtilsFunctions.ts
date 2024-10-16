import { ResearchResult, SimpleResearchResult } from './Types';

/**
 * This function helps simulate an async request to the server
 */
export function simulateAsyncRequest(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from server');
    }, 300);
  });
}

/**
 * This function will parse any hash part of a URL (foo.com/baz#bar)
 * It will return the result index (following an r)
 * and the image index (following an i). If 'i' or 'r' cannot be found in the
 * hash part of the URL, the associated index returned will be 1.
 * @param hashToParse The hash to parse
 * @param results The result object of which those index are referring to. This is used
 * to validate an eventual user input. For example,
 * if a user type the URL : foo.com/baz#r8-i1 and there is no such thing as
 * an eight result, we will default to result 1.
 */
export function parseHash(hashToParse: string, results: ResearchResult[]) {
  const maybeDataIndexFromHash = hashToParse.match(/(?<=r)[0-9]/);
  const maybeImageIndexFromHash = hashToParse.match(/(?<=i)[0-9]/);

  const dataIndexFromHash = maybeDataIndexFromHash
    ? parseInt(maybeDataIndexFromHash.toString(), 10)
    : 1;
  const imageIndexFromHash = maybeImageIndexFromHash
    ? parseInt(maybeImageIndexFromHash.toString(), 10)
    : 1;

  const parsedDataIndex =
    dataIndexFromHash <= results.length ? dataIndexFromHash : 1;
  const parsedImageIndex =
    imageIndexFromHash <= results[parsedDataIndex - 1].urls.length
      ? imageIndexFromHash
      : 1;

  return { parsedDataIndex, parsedImageIndex };
}

/**
 * This function will parse any hash part of a URL (foo.com/baz#bar)
 * It will return the result index (following an r). If 'r' cannot be found in the
 * hash part of the URL, the associated index returned will be 1.
 * @param hashToParse The hash to parse
 * @param results The result object of which those index are referring to. This is used
 * to validate an eventual user input. For example,
 * if a user type the URL : foo.com/baz#r8-i1 and there is no such thing as
 * an eight result, we will default to result 1.
 */
export function parseSimpleHash(
  hashToParse: string,
  results: SimpleResearchResult[]
) {
  const maybeDataIndexFromHash = hashToParse.match(/(?<=r)[0-9]/);

  const dataIndexFromHash = maybeDataIndexFromHash
    ? parseInt(maybeDataIndexFromHash.toString(), 10)
    : 1;

  const parsedDataIndex =
    dataIndexFromHash <= results.length ? dataIndexFromHash : 1;

  return { parsedDataIndex };
}
