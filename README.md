# Container Web Apps

Node.js

```
docker-compose up -d --build node
```

<http://localhost:8090>

Angular

```
docker-compose up -d --build angular
```

<http://localhost:8082>

React

```
docker-compose up -d --build react
```

<http://localhost:8083>

React typescript

```
docker-compose up -d --build reacttypescript
```

<http://localhost:8084>

Vue

```
docker-compose up -d --build vue
```

<http://localhost:8085>

Vue typescript

```
docker-compose up -d --build vuetypescript
```

<http://localhost:8086>

---


```
bun create
```
```
bun create vite@latest react-app --template react
```
```
bun create vite@latest react-app --template react-ts
```
```
bun create vite@latest vue-app --template vue
```
```
bun create vite@latest vue-app --template vue-ts
```
```
npx create-nx-workspace --preset=empty
bun install @nxext/angular --save
```
```
bun create vite@latest preact-app --template preact
```
```
bun create vite@latest preact-app --template preact-ts
```
```
bun create vite@latest lit-app --template lit
```
```
bun create vite@latest lit-app --template lit-ts
```
```
bun create vite@latest vanilla-app --template vanilla
```
```
bun create vite@latest vanilla-app --template vanilla-ts
```
```
bun create vite@latest svelte-app --template svelte
```
```
bun create vite@latest svelte-app --template svelte-ts
```
---
```
vue create vue-app
```
```
ng new angular-app
```
```
npx create-react-app react-app
```
```
npx create-react-app react-app --template typescript
```
```
npx create-t3-app@latest
```