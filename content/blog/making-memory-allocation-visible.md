---
title: "Making memory allocation visible with Python"
category: "Computer science"
excerpt: "Why a small simulator can make fragmentation and allocation strategies easier to understand."
published: "2026-10-11"
repository: "https://github.com/klmensah/memory-allocation-simulator"
accent: "rose"
---

Memory management can feel abstract when it is only described with diagrams and definitions. Building a simulator turns it into something you can observe: blocks are allocated, released, divided, and sometimes left in shapes that are difficult to reuse.

## The idea behind the project

The memory allocation simulator is a Python project for exploring how a fixed amount of memory changes as requests arrive. Instead of treating fragmentation as a definition to memorise, the program makes it part of a sequence you can follow.

That creates a useful feedback loop:

- choose an allocation strategy;
- submit a request;
- inspect the remaining blocks;
- release memory; and
- see how the available space changes.

## What the exercise teaches

The most important lesson is that **available memory is not the same as usable memory**. A system may have enough free space in total while still being unable to satisfy a request because that space is split into smaller pieces.

Writing the simulator also reinforces a broader software lesson: visualising state makes complicated behaviour easier to reason about. The same principle is useful in dashboards, workflow systems, and debugging tools.

## Where I would take it next

A future version could compare first-fit, best-fit, and worst-fit strategies using the same sequence of requests. Adding a visual memory map and a few simple metrics would make the trade-offs even clearer.
