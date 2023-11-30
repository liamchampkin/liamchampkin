---

title: Using Chat GPT to help build a Vue component

type: post

id: 'componentgpt'

date: 2023-11-30

category: notes

tags: artificial-intelligence

color: hsl(141.51deg 36.03% 27.26%)

---

I needed to work quickly to get a component built in Vue and add it to a design system. I usually enjoy figuring it out for myself but to meet the deadline I thought it was a good opportunity to see how ChatGPT would handle it.

> could you show me the code to add a class to a div when clicked within vue?

> Certainly! In Vue.js, you can achieve this by using the `v-on` directive to listen for the `click` event and updating the data property associated with the class dynamically. Here's a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue.js Add Class on Click</title>
  <!-- Include the Vue.js library -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

<div id="app">
  <!-- Bind the 'active' class dynamically using v-bind:class -->
  <div :class="{ 'active': isActive }" @click="toggleClass">Click me</div>
</div>

<script>
new Vue({
  el: '#app',
  data: {
    isActive: false
  },
  methods: {
    toggleClass() {
      // Toggle the value of isActive on each click
      this.isActive = !this.isActive;
    }
  }
});
</script>

</body>
</html>
```

This was almost perfect. But being inquisitive and a little lazy I asked it to modify my code…  (I removed script and CSS here to keep it short)

> here's my code... Could you add it here?

```html
<template>
  <component
    role="button"
    :is="wrapper"
    :class="['tile', design_variation, type, 'color-' + color]"
    :style="{ gridColumnStart: +colStart, gridColumnEnd: +colEnd }"
  >
    <div class="tile-inner">
      <div v-if="labelText" class="label">
        <span>{{ labelText }}</span>
      </div>
      <div v-if="tileText" class="tile-text">
        <p>
          {{ tileText }}
        </p>
      </div>
    </div>
  </component>
</template>
```

> Certainly! To add a class to the `div` when it's clicked, you can modify your Vue component as follows:

```html
<template>
  <component
    role="button"
    :is="wrapper"
    :class="['tile', design_variation, type, 'color-' + color, { 'clicked': isClicked }]"
    :style="{ gridColumnStart: +colStart, gridColumnEnd: +colEnd }"
    @click="toggleClass"
  >
    <div class="tile-inner">
      <div v-if="labelText" class="label">
        <span>{{ labelText }}</span>
      </div>
      <div v-if="tileText" class="tile-text">
        <p>
          {{ tileText }}
        </p>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: "VisualNavTile",
  status: "prototype",
  release: "0.1.1",
  data() {
    return {
      isClicked: false,
    };
  },
  props: {
    // ... (your existing props)
  },
  methods: {
    toggleClass() {
      // Toggle the value of isClicked on each click
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

```

`@click` wouldn’t work for keyboard users so I asked it to modify the code to work when pressing the enter key…

> could you change the code so that it works with keyboard enter too not just on mouse click?

> Certainly! You can modify the code to handle both mouse click and keyboard events. Here's an updated version that listens for both click and keydown events (specifically the Enter key):

```html
<template>
  <component
    role="button"
    :is="wrapper"
    :class="['tile', design_variation, type, 'color-' + color, { 'clicked': isClicked }]"
    :style="{ gridColumnStart: +colStart, gridColumnEnd: +colEnd }"
    @click="toggleClass"
    @keydown.enter="toggleClass"
    tabindex="0" <!-- Add tabindex to make the element focusable -->
  >
    <div class="tile-inner">
      <div v-if="labelText" class="label">
        <span>{{ labelText }}</span>
      </div>
      <div v-if="tileText" class="tile-text">
        <p>
          {{ tileText }}
        </p>
      </div>
    </div>
  </component>
</template>
```

>In this modification, I added the `@keydown.enter` event listener to the `component` element. The `tabindex` attribute is also added to make the element focusable. Now, you can click on the element with the mouse or press the Enter key to trigger the `toggleClass` method and toggle the class accordingly.

Notice how it also adds a tab index of 0 with a comment stating what it does?

I was just about to put my feet up and take the rest of the day off but I was curious to know how this would work if I had multiple on a page and I could only select one at a time…

> if I have multiple components on a page, could you change the code so that only one component has the 'clicked' class at a time. So if a component is clicked all other components have their clicked class removed

> Certainly! To ensure that only one component has the 'clicked' class at a time, you can manage the state at the parent level and pass down a prop to each `VisualNavTile` component to determine whether it should have the 'clicked' class. Here's an updated version:

```html
<template>
  <div class="grid">
    <!-- Iterate over your data and create VisualNavTile components -->
    <VisualNavTile
      v-for="(tile, index) in tiles"
      :key="index"
      :is-active="index === activeIndex"
      @toggle-click="toggleClick(index)"
      :col-start="tile.colStart"
      :col-end="tile.colEnd"
      :color="tile.color"
      :label-text="tile.labelText"
      :tile-text="tile.tileText"
    />
  </div>
</template>

<script>
import VisualNavTile from "@/components/VisualNavTile"; // Adjust the path accordingly

export default {
  components: {
    VisualNavTile,
  },
  data() {
    return {
      activeIndex: null,
      tiles: [
        // Your tile data here
      ],
    };
  },
  methods: {
    toggleClick(index) {
      // Set the activeIndex to the clicked component's index
      this.activeIndex = index;
    },
  },
};
</script>
```

> Now, modify your `VisualNavTile` component to accept the `is-active` prop and conditionally apply the 'clicked' class:

```html
<template>
  <component
    role="button"
    :is="wrapper"
    :class="['tile', design_variation, type, 'color-' + color, { 'clicked': isActive }]"
    :style="{ gridColumnStart: +colStart, gridColumnEnd: +colEnd }"
    @click="handleClick"
    @keydown.enter="handleClick"
    tabindex="0"
  >
    <!-- Content of your component remains the same -->
  </component>
</template>

<script>
export default {
  name: "VisualNavTile",
  props: {
    isActive: Boolean,
    // ... (your existing props)
  },
  methods: {
    handleClick() {
      // Emit an event to notify the parent component to toggle the click state
      this.$emit("toggle-click");
    },
  },
};
</script>
```

> In this modification, the parent component (`<YourComponent>`) manages the `activeIndex` state, and each `VisualNavTile` receives an `isActive` prop. The 'clicked' class is applied conditionally based on whether the `isActive` prop is `true` or `false`. When a `VisualNavTile` is clicked, it emits a `toggle-click` event, and the parent component updates the `activeIndex` accordingly. Only one component will have the 'clicked' class at a time.

I didn’t need this for the design system but I was interested to see how Chat GPT would implement it. I didn’t give it any code to work with, it remembered all the inputs from before.

This got me thinking about Design Systems and Large Language models. What if LLM’s had access to a design system API, I could ask it to write code using existing patterns and tokens. It could also see the level of accessibility we are aiming for.

I then stumbled across this video from Wes Bos on Twitter X.

https://twitter.com/wesbos/status/1725533405075435977

My mind was blown. It does raise some questions around the role of design and development in the future and right now it feels quite exciting. But if the rumours of AI improving exponentially are true, then it could become scary pretty quickly.

Sam Altman was speaking at the APEC CEO Summit just before he was fired and re-hired at ChatGPT…

> Jobs: What is the most remarkable surprise that [you believe] will have happened in your field or in your company in 2024?

> SA: The model capability will have taken such a leap forward that no one expected.

> Jobs: Wait, say it again?

> SA: The model capability, like what these systems can do, will have taken such a leap forward no one expected that much progress.

We’ll just have to wait and see.