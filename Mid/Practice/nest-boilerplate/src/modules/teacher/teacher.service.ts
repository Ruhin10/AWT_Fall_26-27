import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto,UpdateStudentDto } from './dto/teacher.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,    
    ) {}

    async getTeachers() {
        try {
            const teachers = await this.teacherRepository.find();
            return teachers;
        } catch (error) {
            throw error;
        }
    }

    async createTeacher(dto: CreateTeacherDto) {
        try {
            const response = await this.teacherRepository.create(dto);
            return await this.teacherRepository.save(response);
        } catch (error) {
            throw error;
        }
    }

  async updateTeacher(id: string, dto: UpdateStudentDto) {
          try {
              console.log("id", id);
              if (!id) {
                  throw new NotFoundException("Teacher with ID not found");
              }
              const student = await this.teacherRepository.findOne({ where: { id: id } });
              if (!student) {
                  throw new NotFoundException("Teacher with ID not found");
              }
              Object.assign(student, dto);
              const { id: uid, ...rest } = student;
              return await this.teacherRepository.update({ id: id }, rest);
          } catch (error) {
              throw error;
          }
      }

       async deleteTeacher(id: string) {
              try {
                  const student = await this.teacherRepository.findOne({ where: { id: id } });
                  if (!student) {
                      throw new NotFoundException("Student with ID not found");
                  }
                  return await this.teacherRepository.delete({ id: id });
              } catch (error) {
                  throw error;
              }
          }
}
