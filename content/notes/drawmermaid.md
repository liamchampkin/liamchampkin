---
title: I built a free tool for drawing Mermaid diagrams
type: post
id: 'drawmermaid'
date: 2026-11-13
category: notes
tags: UX, product-design
color: hsla(0, 38.7%, 41.6%, 0.26)
---

I wanted something that worked like Axure and FigJam: drag things around a canvas, then get Mermaid code out the other end. I couldn't find one, so I built one.

Plenty of Mermaid tools exist, but the ones with a proper visual editor are mostly behind paywalls. There are some that allow for editing code with AI integration with different subscription models which is overkill for my needs. I wanted something simple, free and allowed me to draw them much like I would in Axure or FigJam.

## What it does

[Draw Mermaid](https://drawmermaid.net) lets you build a diagram by dragging and dropping, then converts it to Mermaid. It currently supports flowcharts, mind maps and state diagrams.

You can also go the other way. Paste in existing Mermaid code and it loads onto the canvas. Here you can edit it visually which is useful for tidying up old diagrams, and often quicker than editing syntax by hand. Both diagram types can also be exported as an SVG or PNG.

## Saved in the browser

Everything is stored in your browser. There are no accounts and nothing is uploaded to a server. If you want a backup or need to move a diagram to another machine, export it as JSON and import it later.

## Sharing a diagram

You can share a diagram with a link. The diagram's JSON is encoded in the URL, so whoever opens it sees exactly what you drew, with the same layout and positions, and can keep editing it. Sharing Mermaid code on its own loses that, since it only describes the connections, not how the diagram is arranged.

Because the data lives in the link itself, nothing is stored on a server. Anyone with the link can open the diagram, so treat it as public. Very large diagrams make very long URLs, so for those, export the JSON instead.

## Where Mermaid works

Mermaid is open source plain text, which is why it turns up in so many tools. GitHub renders it directly in Markdown files, issues and pull requests. GitLab, Notion and Obsidian support it too. Jira doesn't render it out of the box, but there are marketplace apps that add it.

It also works well with LLMs. Since a Mermaid diagram is just text, you can ask a model to generate one, paste the code into Draw Mermaid to rearrange it visually, then copy the result back out. It works in reverse as well, export your diagram as Mermaid and ask a model to extend or restructure it.

## LLMs can read the project export JSON too

The exported JSON isn't only for backups. It describes the whole diagram, including the nodes, connections and layout, and LLMs are seem to be good at reading and understanding it. You can paste the JSON into a model and ask it to explain the structure, add nodes, reorganise a section or fix a broken connection. Then import the edited JSON and the diagram opens on the canvas with your changes, still in draw mode.

That gives you a way to work that Mermaid code alone doesn't: the model edits the layout as well as the connections, and you get the result back as a normal drag-and-drop diagram.

## Why I made it

Most tools make you choose between writing Mermaid by hand or drawing visually. I wanted both, so I could see and move things around while I'm working and still end up with something that drops straight into Markdown and docs.

## What's next

I'd like to add more diagram types over time. I'm not sure if I'll ever include an AI tool, I prefer the simplicity of this app and there are other apps that integrate AI but I might consider an MCP integration in the future.

I'll cover each of the diagram types in future posts and explain why I find them useful.

https://drawmermaid.net