class PiyosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def create

    # @todo = Todo.create(name: params[:name])
    # render json: @todo

# binding.pry

    # @todo = Todo.new(params.require(:todo).permit(:name))
    @todo = Todo.new(name: params[:name])

# # exit();
# pp '#'*10
# pp params
# pp params[:name]

    # response = JSON.parse(request.body.read.html_safe)
    # img = request.filtered_parameters["img"]
    # survey = Survey.find_by(:id => response["surveyID"])
    # survey.area.screenshot = img
    # survey.area.save!
    # survey.area.update_columns :screenshot_width => request.filtered_parameters["width"], :screenshot_height => request.filtered_parameters["height"]
    # head 200


    # survey = Survey.find_by(:id => request.filtered_parameters["surveyID"])





    if @todo.save
      # render json: { data: @data }, status: :created
      # render json: @todo, status: :created
      redirect_to fugas_path
    else
      @errors = @todo.errors.full_messages
      render json: { errors: @errors }, status: :bad_request
    end


  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update_attributes(name: params[:name])
    render json: @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      head :no_content, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end
end
