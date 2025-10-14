/**
 * Creates a TransformStream that can be used to stream data to the client.
 * Returns both the stream to be sent in the response and the writer to write to the stream.
 */
export function createStreamableUI() {
  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  return {
    stream: stream.readable,
    writer: {
      write: (text: string) => {
        writer.write(encoder.encode(text));
      },
      close: () => writer.close(),
    },
  };
}
