import React, { useEffect, useState, useContext } from "react";
import "react-chat-elements/dist/main.css";
import { MessageBox } from "react-chat-elements";

function ChatInterface() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log("Hello");
  }, []);

  const send_query = () => {
    console.log(query);
    setMessages([
      ...messages,
      { position: "right", type: "text", text: query },
    ]);
    //socket?.emit("query", { query: query });
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        {messages.map((message, index) => (
          <MessageBox
            key={index}
            position={message.position}
            type={message.type}
            title={message.title}
            text={message.text}
          />
        ))}
      </div>

      <div className="flex items-start space-x-4">
        <div className="min-w-0 flex-1">
          <div className="relative">
            <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden ">
              <label htmlFor="comment" className="sr-only">
                Add your comment
              </label>
              <textarea
                rows={1}
                name="comment"
                onChange={(e) => setQuery(e.target.value)}
                id="comment"
                className="block w-full py-3 border-0 resize-none sm:text-sm px-7 focus:ring-0 focus:border-white"
                placeholder="Enter your message..."
                defaultValue={""}
                value={query}
                // style={}
              />

              {/* Spacer element to match the height of the toolbar */}
              <div className="py-2" aria-hidden="true">
                {/* Matches height of button in toolbar (1px border + 36px content height) */}
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
              <div className="flex items-center space-x-5"></div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={send_query}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;

