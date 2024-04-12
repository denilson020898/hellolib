const importObject = {
  env: {
      console_log: function(x) { console.log(x); }
  },
};

WebAssembly.instantiateStreaming(fetch("zig-out/lib/hellolib.wasm"), importObject).then(
  (obj) => {
    // Call an exported function:
    var add = obj.instance.exports.add;
    const result = add(2,3);
    console.log(result);
  },
);


