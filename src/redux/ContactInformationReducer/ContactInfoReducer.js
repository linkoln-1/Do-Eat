const initialState = {
 ContactInformation: [],
 loading: false,
};

export const ContactInfo = (state = initialState, action) => {
 switch (action.type) {
  case 'info/load/start':
   return {
    ...state,
    loading: true,
   };

  case 'info/load/success':
   return {
    ...state,
    ContactInformation: action.payload,
    loading: false,
   };

  default:
   return state;
 }
};

export default ContactInfo;
