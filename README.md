# Project Information 
# Author
  ### :bowtie: [Juan Kamacho](https://kmacho16.github.io/) 
  
 ## Description 
Technical test developed with Js and React Framework. Data consumed provided by for the [OpenIntro](https://www.openintro.org/data/index.php?data=nba_heights) Organization.

## Demo Use Platform 
## :point_right: [Click Here](https://filter-app-402f8.web.app/)

## Instalation 
Instalation via https: 
```
git clone https://github.com/kmacho16/filtered-array.git
```

Instalation via ssh: 
```
git clone git@github.com:kmacho16/filtered-array.git
```

After clone use command for install dependencies

```
npm i
```

## Test
For Test is used the `@testing-library/react` library for run the Test is necessary before have run `npm i` command. For run test : 

```
npm run test
```

## Run
To run the project is only necesay run 

```
npm start
```

## Selection criteria for best option

The way to select the best option for players in NBA is based on avoiding an `O(n^2)` for that reason, it's important to reduce the nested loops. Because of that, I tried to use other options like specific functions from `Js` and `TS`. Basically, I start to see each item in the array and extract the height from the input element
```
......
for(let a of mData){
      let LookUp:number = input - a.h_in; 
.....
```
after that, I use that number to look in the array directly, which one can be applied for that 

```
.....
      let filtered = mData.find(i=>i.h_in==LookUp);
.....
```

and after that just organize the data for storage in a way that doesn't repeat the same elements

```
.....
if(filtered && filtered!==a){
        if(a.first_name>filtered.first_name){
          setFilteredData(prev=>new Set(prev.add(`${a.first_name} ${a.last_name} | ${filtered!.first_name} ${filtered!.last_name}`)))
        }else{
          setFilteredData(prev=>new Set(prev.add(`${filtered!.first_name} ${filtered!.last_name} | ${a.first_name} ${a.last_name}`)))
        }
      } 
.....
```

the final function is 

```
const search = () =>{
    setFilteredData(new Set())
    filteredData.clear()
    const input = inputHeight!;
    const mData:Array<Nba> = data;
    for(let a of mData){
      let LookUp:number = input - a.h_in;
      let filtered = mData.find(i=>i.h_in==LookUp);
      if(filtered && filtered!==a){
        if(a.first_name>filtered.first_name){
          setFilteredData(prev=>new Set(prev.add(`${a.first_name} ${a.last_name} | ${filtered!.first_name} ${filtered!.last_name}`)))
        }else{
          setFilteredData(prev=>new Set(prev.add(`${filtered!.first_name} ${filtered!.last_name} | ${a.first_name} ${a.last_name}`)))
        }
      } 
    }
  }
```


## Tech
Solution built uses a number of open source projects to work properly:

- [React] - HTML enhanced for web apps!
- [Firebase] - FreeHosting by Google


[React]:<https://reactjs.org/>
[Firebase]:<https://firebase.google.com/>
