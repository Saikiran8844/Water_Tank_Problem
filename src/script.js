function containChartCode() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    svg.setAttribute('height', `${300}px`);
    svg.setAttribute('width', `${400}px`);
    svg.setAttribute('viewBox', `0 0 20 20`);
  
  
 const chartData=[0,4,0,0,0,6,0,6,4,0];
  
    function generateChart(data) {
      const barChartElems = [];
  
      const create = (d) => {
        d.forEach((entry, index) => {
          const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          bar.setAttribute('x', index * (20 / data.length));
          bar.setAttribute('y', 20 - 0);
          bar.setAttribute('height', `${0}px`);
          bar.setAttribute('width', `${20 / data.length}px`);
          bar.setAttribute('style', 'transition: 0.5s all;');
          svg.appendChild(bar);
          barChartElems.push(bar);
        });
      };
  
      const update = (newData) => {
        if (newData.length > barChartElems.length) {
          create(newData.filter(((e, i) => i > barChartElems.length - 1)));
        }
  
        newData.forEach((newEntry, index) => {
          if (index > barChartElems.length - 1) return;
  
          const bar = barChartElems[index];
          bar.setAttribute('x', index * (20 / newData.length));
          bar.setAttribute('width', `${20 / newData.length}px`);
  
          setTimeout(() => {
            bar.setAttribute('y',20 - newEntry);
            bar.setAttribute('height', `${newEntry}px`);
          }, 50 * index);
        });
      };
  
      create(data);
      update(data);
      return update;
    }
   
  document.getElementById('root').appendChild(svg);
  function resultant(arr){
    let res=0;
   const a=[]
   let n=arr.length;
   for(let i = 1; i < n - 1; i++)
           {
               let left = arr[i];
               for(let j = 0; j < i; j++)
               {
                   left = Math.max(left, arr[j]);
               }
               let right=arr[i]
               for(let j = i + 1; j < n; j++)
               {
                   right = Math.max(right, arr[j]);
               }
               res += Math.min(left, right) - arr[i];
               a[i]=Math.min(left, right) - arr[i];
           }
        generateChart(a);
        document.getElementById("root").innerHTML="Output: "+res;
  };
  document.getElementById("out").appendChild(svg);
const output= resultant(chartData);

  
  }
  

  containChartCode();