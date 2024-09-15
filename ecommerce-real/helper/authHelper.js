// import bcrypt from 'bcrypt';
// export const hashPassword = async (password)=>{
//     try{

// const saltRounds= 10;
// const hashedPassword = await bcrypt.hash(password, saltRounds);
//     }catch(error){
//         console.log(`Error in hashing password ${error}`.bgRed.white)
//     }
// };
//  export const comparePassword = async (password, hashedPassword)=>{
//     return bcrypt.compare(password, hashedPassword);
//  }
import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};