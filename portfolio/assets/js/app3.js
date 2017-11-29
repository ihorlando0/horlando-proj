function dis(x){
                if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==7 || x==8 || x==9 || x==0 || x=='(' || x==')'){
                frm.txt.value=frm.txt.value+x;}
                else{
                    if(frm.txt.value.charAt(frm.txt.value.length-1)==x){}
                    else{
                        if(frm.txt.value.charAt(frm.txt.value.length-1)=='/' ||frm.txt.value.charAt(frm.txt.value.length-1)=='*' ||frm.txt.value.charAt(frm.txt.value.length-1)=='+' ||frm.txt.value.charAt(frm.txt.value.length-1)=='-' ||frm.txt.value.charAt(frm.txt.value.length-1)=='.'){
                            frm.txt.value=frm.txt.value.slice(0,frm.txt.value.length-1);
                        }
                        frm.txt.value=frm.txt.value+x;
                    }
                }
            }
            function ce(){
                frm.txt.value='';
            }
            function bs(){
                frm.txt.value=frm.txt.value.slice(0,frm.txt.value.length-1);
            }