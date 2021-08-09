interface IRandom {
    (length: number, type?: 'numeric' | 'alphanumeric' | 'uppercase' | 'lowercase', ): string
  }
  
  const randomId: IRandom = (length, type) => {
      const numeric = '0123456789';
      const alphanumeric = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
      const lowercase = 'abcdefghijklmnopqrstuvwxyz';
      let characters = '';
      if (type === 'numeric') {
        characters = numeric;
      } else if (type === 'alphanumeric') {
        characters = alphanumeric;
      } else if (type === 'uppercase') {
        characters = uppercase;
      } else if (type === 'lowercase') {
        characters = lowercase;
      } else {
        characters = `${alphanumeric}${lowercase}`;
      }
      let code = '';
      for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return code;
    }
  
  export default randomId;