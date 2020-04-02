//*******************************************
//*Ho va Ten: Pham Anh Tuan					*
//*Lop: Ky Thuat Phan Mem 14CTT				*
//*MSSV: 18071591							*
//*******************************************
#include<stdio.h>
#include<windows.h>
#include<conio.h>
#include<time.h>

#define SPEED 100

#define ColorCode_Back			0
#define ColorCode_DarkBlue		1
#define ColorCode_DarkGreen		2
#define ColorCode_DarkCyan		3
#define ColorCode_DarkRed		4
#define ColorCode_DarkPink		5
#define ColorCode_DarkYellow	6
#define ColorCode_DarkWhite		7
#define ColorCode_Grey			8
#define ColorCode_Blue			9
#define ColorCode_Green			10
#define ColorCode_Cyan			11
#define ColorCode_Red			12
#define ColorCode_Pink			13
#define ColorCode_Yellow		14
#define ColorCode_White			15

#define MaxLen 10
#define MinLen 1

#define MaxWall 100
#define MinWall 1

enum TrangThai {LEFT, RIGHT};

struct ToaDo{
	int x, y;
};

struct BUTT{
	ToaDo TD;
	TrangThai TT;
};



void clrscr();
void TextColor (int color);
void gotoXY (int column, int line);

void balls(int a);
void headd(int a);
void fullCock(int pos, int len);

void init_butt(BUTT &butt);
void butt(int a);
void dichuyen_butt(int posX, int posY);
void dieuKhien_butt(BUTT &butt);
void checkPennis(int &flagCiuChan, int &lenCiuChan, int &flagCiuLe, int &lenCiule);

void view_N();

int main()
{
	BUTT butt;
	init_butt(butt);
	srand(time(NULL));
	int flagCiuChan = 1, flagCiuLe = 0, 
		lenCiuChan = MinLen, lenCiuLe = MaxLen, n = 10;
		
	while(true){
		//clrscr();
		system("cls");
		view_N();
		for(int i = 1; i < n+1 ;++i){
			TextColor(rand()%15+1);
			if(i % 2 == 0)
				fullCock(11*i - MaxLen, lenCiuChan);
			else
				fullCock(11*i - MaxLen, lenCiuLe);
		}
		dieuKhien_butt(butt);
		TextColor(ColorCode_White);
		dichuyen_butt(butt.TD.x, butt.TD.y);
		checkPennis(flagCiuChan, lenCiuChan, flagCiuLe, lenCiuLe);
		
		Sleep(SPEED);
	}
	
	//view_N();
		
}

void clrscr(){
	CONSOLE_SCREEN_BUFFER_INFO	csbiInfo;                  
	HANDLE	hConsoleOut;
	COORD	Home = {0,0};
	DWORD	dummy;

	hConsoleOut = GetStdHandle(STD_OUTPUT_HANDLE);
	GetConsoleScreenBufferInfo(hConsoleOut,&csbiInfo);

	FillConsoleOutputCharacter(hConsoleOut,' ',csbiInfo.dwSize.X * csbiInfo.dwSize.Y,Home,&dummy);
	csbiInfo.dwCursorPosition.X = 0;
	csbiInfo.dwCursorPosition.Y = 0;
	SetConsoleCursorPosition(hConsoleOut,csbiInfo.dwCursorPosition);
}

void TextColor (int color){
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE) , color);
}

void gotoXY (int column, int line){
	COORD coord;
	coord.X = column;
	coord.Y = line;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),coord);
}

void balls(int a){
	if(a == 1)
		printf("  __    __\n");
	else if(a == 2)
		printf(" /  \\__/  \\\n");
	else
		printf(" \\_      _/\n");
}

void headd(int a){
	if(a == 1)
		printf("  |______|\n");
	else if(a == 2)
		printf("  /      \\\n");
	else
		printf("  \\__||__/\n");
}

void fullCock(int pos, int len){
	for(int i = 1; i <= 3 ;++i){
		gotoXY(pos, i);
		balls(i);
	}
	for(int i = 4; i <= len + 4 ;++i){
		gotoXY(pos, i);
		printf("  |      |\n");
	}
	for(int i = len + 5; i <= len + 7 ;++i){
		gotoXY(pos, i);
		headd(i - len - 4);
	}
}

void init_butt(BUTT &butt){
	butt.TD.x = 1;
	butt.TD.y = 18;
	butt.TT = RIGHT;
}

void butt(int a){
	if(a == 1)
		printf("  __  __\n");
	else if(a == 2)
		printf(" /  \\/  \\\n");
	else if(a == 3)
		printf("|        |\n");
	else if(a == 4)
		printf(" \\      /\n");
	else if(a == 5)
		printf("  |    |\n");
	else if(a == 6)
		printf("  | || |\n");
}
void dichuyen_butt(int posX, int posY){
	for(int i = 1; i <= 6 ;++i){
		gotoXY(posX, i+posY);
		butt(i);
	}
}

void dieuKhien_butt(BUTT &butt){
	if(_kbhit()){
		int key = getch();
		if(key == 'A' || key == 'a')
			butt.TT = LEFT;
		else if(key == 'D' || key == 'd')
			butt.TT = RIGHT;
	}
	
	if(butt.TT == LEFT)
		butt.TD.x-= 2;
	else if(butt.TT == RIGHT)
		butt.TD.x+= 2;
	
	if(butt.TD.x == MaxWall){
		butt.TT = LEFT;
		butt.TD.x-= 2;
	}
	if(butt.TD.x == MinWall){
		butt.TT = RIGHT;
		butt.TD.x+= 2;
	}
}

void checkPennis(int &flagCiuChan, int &lenCiuChan, int &flagCiuLe, int &lenCiule){
	flagCiuChan > 0 ? ++lenCiuChan : --lenCiuChan;
	flagCiuLe > 0 ? ++lenCiule : --lenCiule;
	if(lenCiuChan == MinLen || lenCiuChan == MaxLen)
		flagCiuChan = !flagCiuChan;
	if(lenCiule == MinLen || lenCiule == MaxLen)
		flagCiuLe = !flagCiuLe;
	//printf("CC: %d \t CL: %d\n", lenCiuChan, lenCiule);
}

void view_N(){
	for(int i = 0; i < MaxWall/4 ;++i){
		TextColor(ColorCode_Yellow);
		gotoXY(MaxWall+18, i);
		putchar(176);
	}
	for(int i = 0; i < MaxWall+18 ;++i){
		TextColor(ColorCode_Pink);
		gotoXY(i, 25);
		putchar(176);
	}
	gotoXY(80, 24);
	printf("press D to move right!");
	gotoXY(20, 24);
	printf("press A to move left!");

}
