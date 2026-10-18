import { Controller,Body, Param, Patch, Post ,Get,Delete} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto, UpdateStudentDto } from './dto/teacher.dto';


@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService :TeacherService ) {}

        @Get()
        async getTeachers() {
            return await this.teacherService.getTeachers();
        }

        @Post()
        async createTeacher(@Body() dto: CreateTeacherDto) {
            return await this.teacherService.createTeacher(dto);
        }

        @Patch(":id")
        async updateTeacher(@Param("id") id: string, @Body() dto: UpdateStudentDto) {
            return await this.teacherService.updateTeacher(id, dto);   
        }

        @Delete(":id")
        async deleteTeacher(@Param("id") id: string) {
            return await this.teacherService.deleteTeacher(id);
        }

    
}

