package main

import (
	"fmt"
	"log"
	"net/http"

	wk "github.com/rAndrade360/realtime-chat-go-react/websocket"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple server")
	})
	http.HandleFunc("/ws", serveWs)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func serveWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	ws, err := wk.Upgrade(w, r)
	if err != nil {
		log.Println(err)
		return
	}

	go wk.Writer(ws)
	wk.Reader(ws)
}
