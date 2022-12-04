# Brave Frontier Wiki Unofficial

Brave Frontier Wiki Unofficial for Omniunits and Dual Brave Burst (DBB)s hosted in Vercel.
Site URL: https://bfwiki.vercel.app

## Features

- [x] Get list of omni units
- [x] Filter omni units based on name, element and **keywords**.
- [x] Display detail of omni unit (Leader Skill, Extra Skill, Brave Burst, Super Brave Burst, Ultimate Brave Burst, Enhancements, SP Recommendation).
- [x] Share detail of omni unit with Web Share API.
- [x] Get list of Dual Brave Burst (DBB) of omni units.
- [x] Filter DBBs based on name, elemental synergy and **keywords**.

## API Usage

### List of Omni Units

To get list of omni units please go to: https://bfwiki.vercel.app/api/omniunits. You can also get specific list of omni units by param search like `name` and `element`.

Example:

1. By `name` https://bfwiki.vercel.app/api/omniunits?name=war
2. By `element` https://bfwiki.vercel.app/api/omniunits?element=fire
3. By `name` and `element` https://bfwiki.vercel.app/api/omniunits?name=sun&element=fire


## Detail of Omni Unit

To get detail of omni unit, you should use `name` of omni unit as path and if space(s) exist in omni unit's name then you should replace them with underscrore (_).

Here's is example:

1. Ignis Halcyon Vargas = https://bfwiki.vercel.app/api/omniunits/Ignis_Halcyon_Vargas
2. Fearless Tate & Tama = https://bfwiki.vercel.app/api/omniunits/Fearless_Tate_&_Tama
3. Kranus, the Argen = https://bfwiki.vercel.app/api/omniunits/Kranus,_the_Argent

## Technology

This project design with monorepo powered by Vercel. Frontend based on Single Page Application stored in `public` folder and backend for API stored in `api` folder. Thanks to [Carlos Roso for his article: How to deploy a monorepo in Vercel](https://carlosroso.com/how-to-deploy-a-monorepo-in-vercel/).

### How to run?

> This project require [Vercel CLI](https://vercel.com/cli) so so please make sure you install it!

**Note: this project requires Node JS version at least 16 or more.**
- Clone this project
- Install dependencies with `npm install`
- Run `vercel dev`
- Run `npm run watch:css` and `npm run watch:js`
